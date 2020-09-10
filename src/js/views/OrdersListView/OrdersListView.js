import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import OrderCard from "../../component/OrderCard/OrderCard";
import "./OrdersListView.css";

const OrdersListView = (props) => {
  console.log("***OrdersListView***");
  const { store, actions } = useContext(Context);

  const [state, setState] = useState({
    ordersList: null,
  });

  useEffect(() => {
    console.log(
      "OrdersListView useEffect 1: Behavior before the component is added to the DOM"
    );
    console.log(
      "OrdersListView.props.match.params.user_id=",
      props.match.params.id
    );
    actions.fetchOrderList(props.match.params.id);
    actions.setInfoBar(true, "Pedidos", actions.getLogin().data.user.name);
    console.log(
      "OrdersListView.useEffect 1.store.ordersList",
      store.ordersList
    );
  }, []);

  useEffect(() => {
    console.log(
      "OrdersListView useEffect 2: Behavior before the component is added to the DOM"
    );
    let newState = state;
    newState.ordersList = store.ordersList;
    setState({ ...state, state: newState });
    console.log(
      "OrdersListView.useEffect 2.store.ordersList=",
      store.ordersList
    );
    console.log(
      "OrdersListView.useEffect 2.state.ordersList",
      state.ordersList
    );
  }, [store.ordersList]);

  let ordersList = state.ordersList;
  if (ordersList) {
    ordersList = ordersList.map((p, i) => {
      return (
        <OrderCard
          key={i}
          id={p.id}
          status={p.orderStatus.name}
          date={p.createdAt}
        />
      );
    });
  }

  return <div>{ordersList}</div>;
};

export default OrdersListView;
