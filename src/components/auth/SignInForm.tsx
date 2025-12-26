import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

// 5 ta static user
const USERS = [
  {
    role: "ADMIN",
    phone: "+998901111111",
    password: "admin123",
    redirect: "/dashboard/admin",
  },
  {
    role: "SUPER_ADMIN",
    phone: "+998902222222",
    password: "super123",
    redirect: "/dashboard/super_admin",
  },
  {
    role: "TEACHER",
    phone: "+998903333333",
    password: "teacher123",
    redirect: "/dashboard/teacher",
  },
  {
    role: "STUDENT",
    phone: "+998904444444",
    password: "student123",
    redirect: "/dashboard/student",
  },
  {
    role: "PARENT",
    phone: "+998905555555",
    password: "parent123",
    redirect: "/dashboard/parent",
  },
];

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Agar foydalanuvchi allaqachon login bo'lsa, avtomatik dashboardga yo'naltirish
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      const user = USERS.find((u) => u.role === role);
      if (user) {
        navigate(user.redirect, { replace: true });
      }
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = USERS.find(
      (u) => u.phone === phone && u.password === password
    );

    if (!user) {
      toast.error("Telefon raqam yoki parol noto‘g‘ri");
      return;
    }

    // Token yaratish
    const token = btoa(`${user.phone}:${user.role}`);
    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);

    navigate(user.redirect);
    toast.success(`Muvaffaqiyatli kirish ${user.role}! `);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your phone and password to sign in!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Label>
                  Phone <span className="text-error-500">*</span>
                </Label>
                <Input
                  placeholder="+998901234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <Label>
                  Password <span className="text-error-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <Button
                  className="w-full !bg-[#032E15]"
                  size="sm"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
