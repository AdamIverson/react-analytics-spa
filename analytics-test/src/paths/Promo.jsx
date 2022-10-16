import { React, useEffect } from "react";

export default function Promo() {
  const dataLayer = window.dataLayer;

  useEffect(() => {
    dataLayer.push({
      'event': 'promo_view',
      'category': 'DL - TEST'
    })}, []);

  return (
    <div id="promo">Promo Box</div>
  )
}