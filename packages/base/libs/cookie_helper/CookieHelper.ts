import Cookies, { CookieGetOptions, CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();
const cookieSetOptions: CookieSetOptions = {
  // secure: true,
  // httpOnly: false,
  // sameSite: "none",
};

const cookieGetOptions: CookieGetOptions = {
  // doNotParse: false,
};

class CookieHelper {
  public static GetCookie(name: string) {
    return cookies.get<string>(name, cookieGetOptions);
  }

  public static SetCookie(name: string, value: string) {
    cookies.set(name, value, cookieSetOptions);
  }

  public static DeleteCookie(name: string) {
    cookies.remove(name, cookieSetOptions);
  }
}

export default CookieHelper;
