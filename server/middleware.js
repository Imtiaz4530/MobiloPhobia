import { NextResponse } from "next/server";

const middleware = (req) => {
    const verify = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('token')) : ""
    const url = req.url

    console.log("verify", typeof window);

    if (!verify && url.includes('/products')) {
        return NextResponse.redirect('http://localhost:3000/auth?page=SIGN-UP')
    }

    if (verify && url.includes('/login')) {
        return NextResponse.redirect('http://localhost:3000')
    }

}

export default middleware