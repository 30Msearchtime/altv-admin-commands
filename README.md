# ⚙️ alt:V Admin Commands

A lightweight, standalone admin command system for **alt:V multiplayer servers**, built with **TypeScript** for strong typing, reliability, and easy integration with any server setup.

---

## 🚀 Features

- **Plug & Play** — Drop into any alt:V server, no core modifications required  
- **Permission System** — Assign specific admin rights per command  
- **Logging** — Tracks all admin actions with timestamps  
- **TypeScript** — Full type safety and IntelliSense support  
- **Standalone** — Works without frameworks or external dependencies  
- **Extensible** — Add your own custom commands with minimal effort  

---

## 🧩 Commands

| Command | Description | Usage |
|----------|--------------|-------|
| `/heal` | Restore player health to full | `/heal` |
| `/armor` | Give full armor to the player | `/armor` |
| `/car [model]` | Spawn a vehicle in front of the player | `/car adder` |
| `/tp [x] [y] [z]` | Teleport to coordinates | `/tp 0 0 72` |

---

## 🧰 Requirements

- Latest **alt:V Server**  
- **Node.js 16+** and **npm**  
- **alt:V Chat Resource** (included by default)  

---

## ⚙️ Installation

### 1. Clone the repository into your server's `resources` folder
```bash
cd resources
git clone https://github.com/30Msearchtime/altv-admin-commands-.git
cd altv-admin-commands-
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the resource
```bash
npm run build
```

### 4. Add resource to your `server.toml`
```toml
resources = [
  "chat",
  "altv-admin-commands"
]
```

### 5. Configure admins
Edit `shared/config.ts` and add your admin player names:
```typescript
export const config: AdminConfig = {
  admins: ["YourPlayerName", "AnotherAdmin"],
  // ... rest of config
};
```

### 6. Restart your server 🎮  

---

## 🛠️ Configuration

Edit `shared/config.ts` to customize the admin system.  
You can define admin names, enable/disable logging, and set permissions for each command.

**Example:**
```typescript
export const config: AdminConfig = {
  admins: ["PlayerName1", "PlayerName2"],
  enableLogging: true,
  permissions: {
    heal: [],
    armor: [],
    car: ["PlayerName1"],
    tp: []
  }
};
```

Empty arrays = accessible to all admins.

---

## 🧱 Project Structure

```
altv-admin-commands/
├── server/
│   ├── commands/
│   │   ├── heal.ts
│   │   ├── armor.ts
│   │   ├── car.ts
│   │   └── tp.ts
│   ├── utils/
│   │   └── permissions.ts
│   └── server.ts
├── shared/
│   └── config.ts
├── resource.toml
├── package.json
└── tsconfig.json
```

---

## ➕ Adding Custom Commands

### Step 1: Create your command file
`server/commands/yourcommand.ts`
```typescript
import * as alt from 'alt-server';
import { PermissionManager } from '../utils/permissions.js';

export function yourCommand(player: alt.Player, args: string[]): void {
  if (!PermissionManager.hasPermission(player, 'yourcommand')) {
    PermissionManager.sendError(player, 'No permission!');
    return;
  }

  // Your logic here
  PermissionManager.sendSuccess(player, 'Command executed!');
  PermissionManager.log(player, 'yourcommand', args);
}
```

### Step 2: Register your command
In `server/server.ts`:
```typescript
import { yourCommand } from './commands/yourcommand.js';

chat.registerCmd('yourcommand', (player: alt.Player, ...args: string[]) => {
  yourCommand(player, args);
});
```

### Step 3: Add permission config
Update `shared/config.ts`:
```typescript
permissions: {
  heal: [],
  armor: [],
  car: [],
  tp: [],
  yourcommand: []
}
```

---

## 🧑‍💻 Development

### Watch mode (auto-compile on change)
```bash
npm run watch
```

### Manual build
```bash
npm run build
```

---

## ❗ Troubleshooting

### Commands not working
- Ensure `chat` resource loads **before** this resource in `server.toml`
- Verify admin player names are correct (case-sensitive)
- Check console logs for build errors

### TypeScript errors
- Run `npm install` to ensure all types are installed
- Confirm Node.js 16+ is used

### Vehicle spawn issues
- Ensure the vehicle model name is valid
- Review server console for error messages

---

## 🤝 Contributing

Contributions are always welcome!  
To contribute:

1. Fork the repository  
2. Create your branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push your branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 📜 License

Licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

If you encounter any issues or need help:
- Open an issue on GitHub  
- Check existing issues  
- Join the official alt:V Discord for help  

---

## 🗺️ Roadmap

- [ ] `/freeze` command  
- [ ] `/kick` and `/ban` commands  
- [ ] `/noclip` command  
- [ ] Web-based admin panel  
- [ ] Database integration for persistent permissions  
- [ ] Multi-language support  

---

## ❤️ Credits

Created with love for the **alt:V community**.  

⭐ **Star this repository** if you find it helpful!
