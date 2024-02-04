import { Session, User } from "@supabase/supabase-js";

export interface SupabaseData {
    user: User | null;
    session: Session | null;
}
