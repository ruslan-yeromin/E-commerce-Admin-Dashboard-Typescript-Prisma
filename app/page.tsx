import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-100">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-gray-800 drop-shadow-md">
          Authjs.dev
        </h1>
        <p className="text-gray-500 text-lg">
          Authentification service by Authjs.dev
        </p>

        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
