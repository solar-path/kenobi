import * as cookie from "cookie"

export async function getSession({ headers }) {
    const cookies = cookie.parse(headers.cookie || "")
    
    try {
        if (cookies.sessionid) {
            const sessionid = cookies.sessionid
            if (sessionid === "session1") {
                return {
                    authenticated: true,
                    isAdmin: true
                }
            } else if (sessionid === "session2") {
                return {
                    authenticated: true,
                    isAdmin: false,
                }
            }
        }
        
    } catch (error) {
        console.log(error)        
    }

    return {
        authenticated: false,
    }

}