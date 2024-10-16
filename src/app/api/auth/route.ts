import { NextRequest, NextResponse } from "next/server";

interface UsersInfo {
  userName: string;
  password: string;
}

const users: UsersInfo[] = [
  {
    userName: "John",
    password: "12345",
  },
  {
    userName: "Jane",
    password: "01234",
  },
  {
    userName: "Kobe",
    password: "asdfgh",
  },
  {
    userName: "Allen",
    password: "qqwwee1",
  },
];

export const POST = async (request: NextRequest) => {
  const { userName, password } = await request.json();

  const isUser = users.find(
    (user) => user.userName === userName && user.password === password
  );
  if (isUser) {
    return NextResponse.json({ message: "خوش آمدید."}, {
      status: 200
    });
  }
  return NextResponse.json({ message: "اطلاعات وارد شده نا معتبر هستند" }, { status: 401 });
};
