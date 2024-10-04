import Button from "@/components/ui/Button";
import Link from "next/link";
import { ROUTES } from "../../lib/constants";

export default function Home() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center grid min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl">به وبلاگ خوش آمدید</h1>
      <p>برای مشاهده بلاگ ها لطفا وارد شوید</p>
      <Button as={Link} href={ROUTES.LOGIN}>
        ورود
      </Button>
    </div>
  );
}
