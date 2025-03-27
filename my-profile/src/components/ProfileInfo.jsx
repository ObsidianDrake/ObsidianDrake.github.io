import React from "react";
import SocialLinks from "./SocialLinks";

function ProfileInfo() {
  const birthDate = new Date("2019-09-27"); // 這裡改成你的生日
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-red-400">關於我</h2>
      <p className="text-lg mt-2">姓名: 黑曜石</p>
      <p className="text-lg">生日: 2019年9月27日 (現年 {age} 歲)</p>
      <p className="text-lg">個性: (~~~~~ 前端學習中 Learning front-end ~~~~)</p>
      <p className="text-lg">興趣: Coding、聽音樂、唱歌、網球、羽毛球</p>
      <SocialLinks />
    </section>
  );
}
   
export default ProfileInfo;
