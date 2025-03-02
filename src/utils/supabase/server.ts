import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options),
                        );
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    );
}

export async function fetchFeedbacks() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('feedback')
        .select()
        .eq('display', true);

    if (error) {
        console.error(error);
        throw new Error('Failed to fetch feedbacks', { cause: error.message });
    }

    if (!data || data.length === 0) {
        return null;
    }

    return data;
}
