// スタイルタグが空でなければ警告
module.exports = (context) => {
  const errors = [];
  if (context.style.trim().length > 0) {
    errors.push(`🚨 <style> is not empty\n||  from ${context.filePath}`);
  }
  return errors;
};
