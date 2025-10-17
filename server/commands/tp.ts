import * as alt from 'alt-server';
import { PermissionManager } from '../utils/permissions.js';

export function tpCommand(player: alt.Player, args: string[]): void {
  if (!PermissionManager.hasPermission(player, 'tp')) {
    PermissionManager.sendError(player, 'You do not have permission for this command!');
    return;
  }
  
  if (args.length < 3) {
    PermissionManager.sendError(player, 'Usage: /tp [x] [y] [z]');
    return;
  }
  
  const x = parseFloat(args[0]);
  const y = parseFloat(args[1]);
  const z = parseFloat(args[2]);
  
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    PermissionManager.sendError(player, 'Invalid coordinates! Use numbers.');
    return;
  }
  
  player.pos = new alt.Vector3(x, y, z);
  
  PermissionManager.sendSuccess(player, `Teleported to: X:${x.toFixed(2)} Y:${y.toFixed(2)} Z:${z.toFixed(2)}`);
  PermissionManager.log(player, 'tp', args);
}
