import * as alt from 'alt-server';
import { config } from '../../shared/config.js';

export class PermissionManager {
  
  static isAdmin(player: alt.Player): boolean {
    return config.admins.includes(player.name);
  }
  
  static hasPermission(player: alt.Player, command: keyof typeof config.permissions): boolean {
    if (!this.isAdmin(player)) return false;
    
    const cmdPerms = config.permissions[command];
    
    // If no specific permissions are set, all admins have access
    if (cmdPerms.length === 0) return true;
    
    return cmdPerms.includes(player.name);
  }
  
  static log(player: alt.Player, command: string, args: string[]): void {
    if (!config.enableLogging) return;
    
    const timestamp = new Date().toLocaleString();
    const argsStr = args.length > 0 ? ` with args: ${args.join(', ')}` : '';
    
    alt.logWarning(`[ADMIN] ${timestamp} - ${player.name} used /${command}${argsStr}`);
  }
  
  static sendError(player: alt.Player, message: string): void {
    alt.emitClient(player, 'chat:message', { msg: `{FF0000}[ERROR] ${message}` });
  }
  
  static sendSuccess(player: alt.Player, message: string): void {
    alt.emitClient(player, 'chat:message', { msg: `{00FF00}[SUCCESS] ${message}` });
  }
}
