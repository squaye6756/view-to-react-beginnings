const OrderLineModal = ({orderOrig, orderLineData}) => {

    const hideOLDetails = (id) => {
        const modal = document.getElementById(`modal-${id}`);
        modal.style.display = 'none';
    }

    return (
        <div class='modal' id={`modal-${orderOrig.OrderId}`}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Order {orderOrig.OrderId}</h5>
                        <button type="button" class="btn-close" onClick={() => {hideOLDetails(orderOrig.OrderId)}}></button>
                    </div>
                    <div class="modal-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>OrderLine ID</th>
                                    <th>Item Desc.</th>
                                    <th>Item Color Desc.</th>
                                    <th>Quantity</th>
                                    <th>OrderLine Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderLineData.map((orderLineEntry) => {
                                    return (
                                        <tr>
                                            <td>{(orderLineEntry.OrderLineId).slice(-8)}</td>
                                            <td>{orderLineEntry.ItemDescription}</td>
                                            <td>{orderLineEntry.ItemColorDescription}</td>
                                            <td>{orderLineEntry.Quantity}</td>
                                            <td>{orderLineEntry.OrderLineSubTotal}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={() => {hideOLDetails(orderOrig.OrderId)}}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderLineModal;
