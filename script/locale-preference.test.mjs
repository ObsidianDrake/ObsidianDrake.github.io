import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLocale, saveLocale, detectLocale, LOCALE_STORAGE_KEY } from '../src/i18n/localePreference.js';

test('saved choice survives a reload and overrides browser language', () => {
  const values = new Map();
  const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
  assert.equal(loadLocale('ko-KR', () => storage), 'ko');
  saveLocale('zh', () => storage);
  assert.equal(loadLocale('ko-KR', () => storage), 'zh');
  assert.equal(values.get(LOCALE_STORAGE_KEY), 'zh');
});

test('all four supported choices can be saved', () => {
  for (const locale of ['en', 'zh', 'ja', 'ko']) {
    let saved;
    const storage = { setItem: (_key, value) => { saved = value; }, getItem: () => saved };
    saveLocale(locale, () => storage);
    assert.equal(loadLocale('en-US', () => storage), locale);
  }
});

test('invalid saved values fall back to browser language', () => {
  for (const value of [null, '', 'fr', 'constructor', '__proto__']) {
    assert.equal(loadLocale('ja-JP', () => ({ getItem: () => value })), 'ja');
  }
});

test('blocked storage does not break reading or changing language', () => {
  const blocked = () => { throw new Error('Storage blocked'); };
  assert.equal(loadLocale('zh-TW', blocked), 'zh');
  assert.doesNotThrow(() => saveLocale('ko', blocked));
  assert.doesNotThrow(() => saveLocale('ko', () => ({ setItem() { throw new Error('Quota exceeded'); } })));
});

test('unsupported choices are never persisted', () => {
  saveLocale('fr', () => { assert.fail('Storage should not be accessed'); });
});

test('browser locale fallback retains the existing language policy', () => {
  for (const [input, expected] of [['zh-TW', 'zh'], ['zh-HK', 'zh'], ['zh-MO', 'zh'], ['ja', 'ja'], ['ko-KR', 'ko'], ['en-US', 'en'], ['fr-FR', 'en'], ['zh-CN', 'en'], ['', 'en']]) {
    assert.equal(detectLocale(input), expected);
  }
});
