import Container from "../components/container";
import Link from "next/link";

const custom404 = () => {
    return (
      <Container>
        <div className="text-center">
          <h1>404</h1>
          <p>
            This page doesn't exist. Please return to
            <Link href="\">
              <a> Home</a>
            </Link>
          </p>
        </div>
      </Container>
    );
}

export default custom404;