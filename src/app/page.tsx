import Button from "@/components/ui/Button";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-14 bg-gradient-to-b from-[#ADA996] via-[#F2F2F2] to-[#DBDBDB]">
        <h1 className="text-3xl lg:text-5xl font-bold">به وبلاگ لورم خوش آمدید.</h1>
        <p>برای مشاهده بلاگ ها لطفا وارد شوید</p>
        <BsArrowDownCircleFill className="animate-bounce" size={40} />
      <Button as={Link} href={ROUTES.LOGIN}>
        ورود
      </Button>
    </div>
  );
}
