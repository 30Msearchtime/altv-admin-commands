import * as alt from 'alt-server';
import { PermissionManager } from '../utils/permissions.js';

export function armorCommand(player: alt.Player, args: string[]): void {
  if (!PermissionManager.hasPermission(player, 'armor')) {
    PermissionManager.sendError(player, 'You do not have permission for this command!');
    return;
  }
  
  // Set armor to maximum (100)
  player.armour = 100;
  
  PermissionManager.sendSuccess(player, 'Your armor has been replenished!');
  PermissionManager.log(player, 'armor', args);
}
