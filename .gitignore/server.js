const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client()
const config = require("./config.json");
const embed = new Discord.RichEmbed()


client.on('ready', () => {
  client.user.setGame(`~도움말 을 쳐보세요.`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`~도움말 을 쳐보세요.`);
});


client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`~도움말 을 쳐보세요.`);
});

client.on("guildMemberAdd", member => {
member.guild.channels.find("name", "free-talk").sendMessage(member.toString() + "님이 서버에 가입하셨습니다!");
  const guildMember = message.member;
  guildMember.addRole('DP!');
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  


 
  

  if(command === "투표") {
    
         message.delete().catch(O_o=>{});

    if(!message.member.roles.some(r=>["약빤 호랑이", "멤버", "호랭이 사육사", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 여러분은 권한이 없어용 ㅠㅠ");
    
    
    const agree = "✅";
    const disagree = "❎";
    
    let msg = await message.channel.send("투표해주세요!");
    await msg.react(agree);
    await msg.react(disagree);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send(`투표가 끝났어요! \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);
  }
    
    


  
  if(command === "도움말") {
    
    message.reply("1대1로 도움말을 보내었습니다");
let help = [
   "맨 앞에 ~를 붙여주세요",
   "**예** `~핑`",
   "                                                                ",
   "                                                                ",
   "                                                                ",
   "**핑** = 봇의 핑을 보여줍니다.",
   "**말** = 말 뒤에 한말을 다시말합니다. (예 : ~말 안녕하세요.)",
   "**아바타** = 아바타를 보여줍니다.",
   "**아침** = 아침사진을 보여줍니다.",
   "**밤** = 밤사진을 보여줍니다.",
   "------------------------ 관리자 명령어 --------------------------",
   "**청소** = 채팅을 청소합니다.",
   "**킥** = 유저를 킥합니다.",
   "**밴** = 유저를 밴합니다.",
   "------------------------ 음악봇 명령어(일부 서버) -----------------",
   "**맨 앞에 !를 붙여주세요",
   "**예** `!노래신청 아모르파티`",
   "                                                                ",
   "                                                                ",
   "                                                                ",
   "**!노래신청** = 노래를 신청합니다.",
   "**!스킵** = 스킵에 대한 투표를 합니다.",
     ];
    message.author.sendMessage(help);

 }
  


  if(command === "아바타") {
    message.delete().catch(O_o=>{});
    
     message.channel.sendMessage({
        "embed": {
                title: '당신의 아바타입니다!^^',
                url: message.author.avatarURL,
                "image": {
                "url": message.author.avatarURL,
                }
            }
        });
    
  }
    
    
    
    
 if(command === "퐁") {
   
    message.delete().catch(O_o=>{});
   
   message.channel.send("핑!"); 
  }
  
  
  
  if(command === "핑") {
    
     message.delete().catch(O_o=>{});
   
    const m = await message.channel.send("핑이요?");
    m.edit(`퐁! 대기 시간은 ${m.createdTimestamp - message.createdTimestamp}ms 입니다. API 대기 시간은 ${Math.round(client.ping)}ms 입니다. ^^7`);
  }

  if(command === "말") {
    
    
    if(!message.member.roles.some(r=>["약빤 호랑이", "멤버", "사육사", "ADMIN", "봇 개발자", `282396289252065280`].includes(r.name)) )
      return message.reply("죄송하지만 여러분은 권한이 없어용 ㅠㅠ");
    
     message.delete().catch(O_o=>{});

    const sayMessage = args.join(" ");

    message.channel.send(sayMessage);

  }


  if(command === "공지") {
    
     message.delete().catch(O_o=>{});
    
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "봇설명입니다",
      url: "https://discord.gg/h4GCDTa",
      description: "이 봇은 현제 나이트 BOT에 의해 실행되고있습니다",
      fields: [{
          name: "서버 관리봇",
          value: "현제 이 봇은 24시간 호스팅을 받는중입니다. (속도확인은 ~핑으로)"
        },
        {
          name: "백호 유튜브",
          value: "이봇은 백호유튜브를 위해 만들어 졌습니다[백호유튜브 바로가기](https://www.youtube.com/user/yhjh1260)"
        },
        {
          name: "부탁",
          value: "싸우지 말고!**__모두 행복하게__** 잘 지내봅시다 ^^."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "?서버 관리자"
      }
    }
  })

  }
  
  if(command === "킥") {
    
     message.delete().catch(O_o=>{});
  
    if(!message.member.roles.some(r=>["약빤 호랑이", "멤버", "호랭이 사육사", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 여러분은 권한이 없어용 ㅠㅠ");
    
  
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("이 서버의 유효한 회원을 언급하십시오.");
    if(!member.kickable) 
      return message.reply("저보다 높은권한은 강퇴가 안되요!");
    
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("킥 사유를 밝혀주세요! (예 : ~킥 @봇관리자#1234) 도배");
    
   
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} 님이 ${message.author.tag}에게 강퇴당하셨습니다 사유 : ${reason}`);

  }
  
  if(command === "밴") {
    
     message.delete().catch(O_o=>{});
   
    if(!message.member.roles.some(r=>["약빤 호랑이", "멤버", "호랭이 사육사", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 여러분은 권한이 없어용 ㅠㅠ");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("이 서버의 유효한 회원을 언급하십시오.");
    if(!member.bannable) 
      return message.reply("저보다 높은권한은 강퇴가 안되요!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("밴 사유를 적어주세요!(예 : ~벤 @봇관리자#1234 도배)");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} 님이 ${message.author.tag} 님에게 밴당하셨습니다 사유 : ${reason}`);
  }
  
  if(command === "청소") {
 
    const deleteCount = parseInt(args[0], 10);
    
    if(!message.member.roles.some(r=>["약빤 호랑이", "멤버", "호랭이 사육사", "ADMIN", "봇 개발자"].includes(r.name)) )
      return message.reply("죄송하지만 여러분은 권한이 없어용 ㅠㅠ");
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2에서 100중 숫자를 같이 써주세요! (예 ~청소)()( 99)");
    
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`삭제불가 이유 : ${error}`));
  }

  });

client.login(process.env.BOT_TOKEN);
