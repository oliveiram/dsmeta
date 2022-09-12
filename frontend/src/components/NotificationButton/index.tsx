import icon from '../../assets/img/notification_icon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Sucesso");
        });
}

function NotificationButton({ saleId }: Props) {
    return (
        <>
            <div className="dsmeta-red-btn-container">
                <div class="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                    <img src={icon} alt="Notificar" />
                </div>
            </div>
        </>

    )
}

export default NotificationButton
