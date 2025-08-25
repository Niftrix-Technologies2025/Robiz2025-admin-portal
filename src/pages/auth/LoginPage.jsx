import { set } from "idb-keyval";
import InvalidText from "../../components/InvalidText";
import { eyeClosedIcon, eyeOpenIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductLogo from "../../components/ProductLogo";
import { loginService } from "../../services/auth.service";
import CustomButton from "../../components/CustomButton";
import { BeatLoader } from "react-spinners";
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(true);
    const isValid = username.trim() !== "" && password !== "";
    const [hasError, setHasError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setIsButtonActive(false);
        setHasError(false);
        try {
            const response = await loginService({
                username: username.trim(),
                password: password,
            });
            const data = response.data;
            await set("robiz_admin_details", {
                firstName: data.firstName,
            });
            //store payment values in IndexedDB
            // try {
            //     const paymentValues = await getPaymentValues();
            //     await set("paymentValues", paymentValues);
            // } catch (paymentError) {
            //     console.error(
            //         "Failed to fetch/store payment values:",
            //         paymentError
            //     );
            // }
            navigate("/main-dashboard", { replace: true });
        } catch (error) {
            setIsButtonActive(true);
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500
            ) {
                setHasError(true);
            }
        } finally {
            setIsButtonActive(true);
        }
        // try {
        //     if (username === "admin" && password === "123") {
        //         navigate("/main-dashboard", { replace: true });
        //     } else {
        //         throw new Error("Invalid credentials");
        //     }
        // } catch (error) {
        //     setHasError(true);
        // } finally {
        //     setIsButtonActive(true);
        // }
    };

    return (
        <div className="flex flex-col items-center z-10">
            <div className="w-[400px] max-sm:w-[291px]">
                <div>
                    <ProductLogo />
                    {/* <p className="font-dmSans">Robiz Admin</p> */}
                    <div className="flex flex-col">
                        <p
                            className="font-dmSans text-textColorAlt max-sm:text-[30px] text-[40px] 
                        font-semibold tracking-wide max-sm:mt-[40px]"
                        >
                            LOG IN
                        </p>
                    </div>
                </div>
                <div>
                    <p className="font-dmSans text-textColorAlt text-[18px] mt-[31px] max-sm:text-[15px]">
                        Mobile Number/Email ID
                    </p>
                    <input
                        // ref={usernameRef}
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setHasError(false);
                        }}
                        className={`${
                            hasError
                                ? "border-2 border-red-500 ring-2 ring-red-500"
                                : "border-[2px] border-inputBorder"
                        } rounded-[5px] w-full h-[60px] mt-[14px] text-textColorAlt p-3 font-dmSans max-sm:h-[54px]`}
                    />
                </div>
                <div>
                    <p className="font-dmSans text-textColorAlt text-[18px] mt-[37px] max-sm:text-[15px]">
                        Password
                    </p>
                    <div className="relative">
                        <input
                            // ref={passwordRef}
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setHasError(false);
                            }}
                            className={`${
                                hasError
                                    ? "border-2 border-red-500 ring-2 ring-red-500"
                                    : "border-[2px] border-inputBorder"
                            } rounded-[5px] w-full h-[60px] mt-[14px] p-3 text-textColorAlt font-dmSans max-sm:h-[54px]`}
                        />
                        <button
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/4"
                        >
                            <img
                                src={showPassword ? eyeOpenIcon : eyeClosedIcon}
                                alt={
                                    showPassword
                                        ? "Hide Password"
                                        : "Show Password"
                                }
                                // title="img text"
                                className="w-6 h-6 cursor-pointer"
                            />
                        </button>
                    </div>
                </div>
                {hasError && (
                    <InvalidText
                        displayText="Invalid Credentials"
                        className={
                            "flex flex-row items-center justify-center mt-[20px] text-warningRed text-[18px]"
                        }
                    />
                )}
                {/* <div className="flex flex-row items-center justify-center mt-[19px]">
                    <Link
                        to="/auth/forgot-password"
                        className="font-dmSans text-white text-[18px]"
                    >
                        Forgot Password?
                    </Link>
                </div> */}
                <div className="h-[20px]"></div>
                <CustomButton
                    btnText={
                        isButtonActive ? (
                            "LOG IN"
                        ) : (
                            <BeatLoader
                                loading={true}
                                size={10}
                                color="var(--color-textColor)"
                            />
                        )
                    }
                    active={isValid && isButtonActive}
                    onClick={handleSubmit}
                    className={`w-full text-black mt-[44px] h-[60px] 
                        max-sm:h-[54px] mb-[233px] max-sm:mb-[189px] !rounded-[5px]`}
                />
            </div>
        </div>
    );
}
export default LoginPage;
