import Background from "../../components/Background/Background";
import style from "./Recap23.module.css";

export default function Recap23() {
    return (
        <>
            <Background>
                <h1>
                    Hi{" "}
                    <span style={{ color: "var(--vittorio-font-color)" }}>
                        Vittorio
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "var(--riccardo-font-color)" }}>
                        Riccardo
                    </span>
                    .
                </h1>
                <div>Welcome to your very own year RECAP.</div>
                <div>
                    It&apos;s time to revisit all those photos and moments that
                    made 2023 so unforgettable.✨🎉✨
                </div>
            </Background>
            <div>Cisob a tutti</div>
        </>
    );
}
