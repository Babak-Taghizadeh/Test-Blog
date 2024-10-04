import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";

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
    cookies().set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: 60 * 60 * 24,
    });
    return NextResponse.json({ message: "خوش آمدید."}, { 
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=${new Date(Date.now() + 60 * 60 * 24 * 1000).toUTCString()}`
        },
        status: 200
     });
  }
  return NextResponse.json({ error: "اطلاعات وارد شده نا معتر هستند" }, { status: 401 });
};
