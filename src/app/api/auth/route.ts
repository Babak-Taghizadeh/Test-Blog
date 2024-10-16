import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

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
    const token = uuidv4();
    const response = NextResponse.json(
      { message: "خوش آمدید." },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    });
    return response;
  }
  return NextResponse.json(
    { error: "اطلاعات وارد شده نا معتر هستند" },
    { status: 401 }
  );
};
