const staticSubreddits = () => {
  // beacuse of how data needed to be fetched, both name and icon need to be in seperate
  // arrays. with subreddits[0] matching with subredditIcons[0]
  const staticNames = [
    'r/microsoft',
    'r/google',
    'r/webdev',
    'r/javascript',
    'r/Python',
    'r/node',
    'r/apple',
  ];
  const staticIcons = [
    'https://b.thumbs.redditmedia.com/FgbvrgUS2iuvaMP7tXcY2TRyBGBvu2HajmpDYUA8mEU.png',
    'https://b.thumbs.redditmedia.com/Y-PIy-bwT_uaIcDD4XyjcGzx40junmsDRmLiKyndPkQ.png',
    'https://b.thumbs.redditmedia.com/vk8EAqzcLRGYh_Yisi68CglMMuheNEFKNaDLZy7h2ZE.png',
    'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png',
    '',
    'https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png',
    'https://b.thumbs.redditmedia.com/Mz8ihHn3LXepB8tQzKBhrir00PV8CbQCn9GAO_JEoaQ.png',
  ];

  return { staticNames, staticIcons };
};

export default staticSubreddits;
