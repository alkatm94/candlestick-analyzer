const pairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'BTCUSD', 'AUDUSD'];

// دالة لتوليد الشمعة عشوائيًا
function generateCandle(pair) {
  const open = (Math.random() * (1.2 - 1) + 1).toFixed(5);
  const close = (Math.random() * (1.2 - 1) + 1).toFixed(5);
  const timestamp = new Date().toLocaleTimeString();

  console.log(`${pair} -> Open: ${open} | Close: ${close}`);

  const signalElement = document.getElementById(`${pair.toLowerCase()}-signal`);
  const timestampElement = document.getElementById(`${pair.toLowerCase()}-timestamp`);

  if (parseFloat(close) > parseFloat(open)) {
    signalElement.textContent = "CALL";
    signalElement.className = 'signal call';
  } else if (parseFloat(close) < parseFloat(open)) {
    signalElement.textContent = "PUT";
    signalElement.className = 'signal put';
  }

  timestampElement.textContent = `Last updated: ${timestamp}`;
}

// دالة لتحديث الإشارات بناءً على الدقيقة السابقة
function updateSignals() {
  console.log("🔄 Updating signals...");
  pairs.forEach(pair => {
    generateCandle(pair);
  });
}

// عند الضغط على زر التحديث
document.getElementById("updateButton").addEventListener("click", updateSignals);

// التحديث سيحدث كل دقيقة (60000 مللي ثانية)
setInterval(function() {
  setTimeout(updateSignals, 60000); // تأخير 1 دقيقة
}, 60000);

// التحديث الأولي عند فتح الصفحة
updateSignals();
