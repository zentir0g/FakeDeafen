# 🎭 FakeDeafen - A BetterDiscord Plugin  

**Version:** 1.0.0  
**Author:** Harry Uchiha  
**License:** MIT  

## 🎧 What is FakeDeafen?  
FakeDeafen is a simple yet effective BetterDiscord plugin that adds a **fake deafen button** 🎭 to Discord. It visually replaces the real deafen button, but when clicked, it **does nothing**, keeping your real deafen functionality hidden.  

## 🛠 Features  
✔️ **Stealth Mode** – The fake button mimics the real deafen button while keeping your actual status unchanged.  
✔️ **Easy Toggle** – Click the fake button, and it pretends to deafen you while your actual audio remains active.  
✔️ **Non-Intrusive** – The plugin does not modify any core Discord features; it just overlays a decoy button.  

## 📦 Installation  
1️⃣ **Download** the latest version of `FakeDeafen.plugin.js`.  
2️⃣ **Move** the file into your BetterDiscord plugins folder.  
   - Open Discord and go to **User Settings > Plugins**.  
   - Click **"Open Plugins Folder"** and drop the file there.  
3️⃣ **Enable** the plugin in the BetterDiscord settings.  

## ⚙️ How It Works  
🔍 The plugin intercepts WebSocket messages and detects when the deafen button is used. It then **hides the real button** and replaces it with a fake red button.  
🎭 Clicking the fake button does **nothing**, but you can still deafen yourself using a custom function stored in `window.deafen()`.  

## ❌ Uninstallation  
To remove FakeDeafen, simply **disable or delete** `FakeDeafen.plugin.js` from your BetterDiscord plugins folder.  

## 📝 Notes  
- This plugin is purely **cosmetic** and does not modify Discord’s internal behavior.  
- **Use responsibly!** This plugin is for fun and harmless pranks.  

## 📜 License  
This project is licensed under the **MIT License** – feel free to modify, share, and contribute! 🚀  

---

🔹 **Enjoy using FakeDeafen?** Let us know your thoughts! 🎉
