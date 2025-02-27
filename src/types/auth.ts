export interface AuthProps extends AuthResponse {
  data: AuthResponse;
}

export interface AuthResponse {
  account_type: AccountType;
  supabase_id: string;
  token: string;
  access_token: string;
  refresh_token: string;
  expires_at: number;
  expires_in: number;
}

export enum AccountType {
  client = "client",
  business = "business",
  business_team_leader = "business_team_leader",
  business_operations_managers = "business_operations_managers",
}
