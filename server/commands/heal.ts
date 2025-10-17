import * as alt from 'alt-server';
import { PermissionManager } from '../utils/permissions.js';

export function healCommand(player: alt.Player, args: string[]): void {
  if (!PermissionManager.hasPermission(player, 'heal')) {
    PermissionManager.sendError(player, 'You do not have permission for this command!');
    return;
  }
  
  // Set health to maximum (200)
  player.health = 200;
  
  PermissionManager.sendSuccess(player, 'Your health has been restored!');
  PermissionManager.log(player, 'heal', args);
}
