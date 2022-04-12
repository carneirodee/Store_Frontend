import { TouchBallLoading } from 'react-loadingg';
import { Container } from '../components/commons/containers'

function Loading() {

    return (
        <Container>
            <TouchBallLoading color={"green"} size={"large"} />
        </Container>
    );
}
export default Loading;
