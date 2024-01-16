export type ExtendedUser = DefaultSession["user"] & {
    isOAuth: boolean;
}