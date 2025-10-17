export interface AdminConfig {
  admins: string[];
  enableLogging: boolean;
  permissions: {
    heal: string[];
    armor: string[];
    car: string[];
    tp: string[];
  };
}

export const config: AdminConfig = {
  // Admin player names (case-sensitive)
  admins: [
    "PlayerName1",
    "PlayerName2"
  ],
  
  enableLogging: true,
  
  // Individual permissions per command (optional, if empty = all admins)
  permissions: {
    heal: [],
    armor: [],
    car: [],
    tp: []
  }
};
