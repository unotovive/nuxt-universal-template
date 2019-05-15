// imgにalt=""を書いていなければ警告
module.exports = (context) => {
  const errors = [];
  const matchesImg = context.template.match(/(<img\s[\s\S]*?>)/);
  if (matchesImg) {
    const matchesImgAlt = context.template.match(/(<img\s[\s\S]*?alt=["'][\s\S]*?>)/);
    if (!matchesImgAlt) {
      errors.push(`🚨 Undefined alt="": '${matchesImg[1].replace(/\n/g, ' ').replace(/ +/g, ' ')}'\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
