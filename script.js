// Side C-World Interactive Script
document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
    const marsTempElement = document.getElementById('mars-temp');
    const logicTicker = document.getElementById('logic-ticker');

    // आपका लॉजिक 123456789
    const projectLogic = "123456789";
    logicTicker.innerText = `Active Logic: ${projectLogic}`;

    // मंगल ग्रह का डमी डेटा (इसे API से भी जोड़ा जा सकता है)
    function updateMarsData() {
        const randomTemp = Math.floor(Math.random() * (0 - (-100) + 1)) + (-100);
        marsTempElement.innerText = `Mars Temp: ${randomTemp}°C`;
        console.log("Side C-World Status: Siddham");
    }

    // हर 5 सेकंड में अपडेट करें
    setInterval(updateMarsData, 5000);
    updateMarsData();
});
