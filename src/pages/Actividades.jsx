import React from "react";
import "./actividades.css";

const Actividades = () => {
  return (
    <div className="actividades">
      <div className="dia"></div>
      {/* LUNES */}
      <div className="dlunes" id="dia">
        {/* Nombrarmos a los div de los dias de la siguiente mandera dlunes, dmartes etc */}
        <h3>Lunes</h3>
      </div>
      <div className="hl1" id="horasL">
        <h3>Funcional</h3>
        <h3>Core</h3>
        <h3>Tabata</h3>
        <h3>Cardio</h3>
      </div>
      <div className="hl2" id="horasL">
        <h3>Funcional</h3>
      </div>
      <div className="hl3" id="horasL">
        <h3>Tabata</h3>
        <h3>Strong</h3>
        <h3>Funcional</h3>
        <h3>Cross</h3>
      </div>
      <div className="hl4" id="horasL">
        <h3>Ritmos Mixtos</h3>
        <h3>Funcional</h3>
        <h3>Step/Latin Fit</h3>
        <h3>Dance Fit</h3>
      </div>
      <div className="hl5" id="horasL">
        <h3>Zumba</h3>
        <h3>Core</h3>
        <h3>Dance Fit</h3>
        <h3>Latin Fit</h3>
      </div>
      {/* MARTES */}
      <div className="dmartes" id="dia">
        <h3>Martes</h3>
      </div>
      <div className="hm1" id="horas">
        <h3>Dorsal</h3>
        <h3>Fitball</h3>
        <h3>Fullbody</h3>
        <h3>Body up</h3>
      </div>
      <div className="hm2" id="horas">
        <h3>GAP</h3>
      </div>
      <div className="hm3" id="horas">
        <h3>Pilates</h3>
      </div>
      <div className="hm4" id="horas">
        <h3>Trampolín</h3>
        <h3>Dance Fit</h3>
        <h3>Strong</h3>
        <h3>Ritmos Mixtos</h3>
      </div>
      <div className="hm5"></div>
      {/* MIERCOLES */}
      <div className="dmiercoles" id="dia">
        <h3>Miercoles</h3>
      </div>

      <div className="hx1" id="horas">
        <h3>Cardio Box</h3>
        <h3>Trampolín</h3>
        <h3>Comba</h3>
        <h3>Metcom</h3>
      </div>
      <div className="hx2" id="horas">
        <h3>METCOM</h3>
      </div>
      <div className="hx3" id="horas">
        <h3>Traccion</h3>
        <h3>Funcional</h3>
        <h3>GAP</h3>
        <h3>WOD</h3>
      </div>
      <div className="hx4" id="horas">
        <h3>Merengefit</h3>
        <h3>Bailame Fit</h3>
        <h3>Circuito</h3>
        <h3>Vive Bailando</h3>
      </div>
      <div className="hx5" id="horas">
        <h3>Zumba</h3>
        <h3>Circuito</h3>
        <h3>Vive Bailando</h3>
        <h3>Funcional</h3>
      </div>
      {/* JUEVES */}
      <div className="djueves" id="dia">
        <h3>Jueves</h3>
      </div>
      <div className="hj1" id="horas">
        <h3>Metcom</h3>
        <h3>4 Season</h3>
        <h3>Hit</h3>
        <h3>GAP</h3>
      </div>
      <div className="hj2" id="horas">
        <h3>Body Up</h3>
      </div>
      <div className="hj3" id="horas">
        <h3>Pilates</h3>
      </div>
      <div className="hj4" id="horas">
        <h3>Zumba</h3>
        <h3>Puro Ritmo</h3>
        <h3>Trampolín</h3>
        <h3>Funcioal</h3>
      </div>

      {/* Viernes */}
      <div className="dviernes" id="dia">
        <h3>Viernes</h3>
      </div>
      <div className="hv1" id="horas">
        <h3>Cada Viernes</h3>
        <h3>una clase</h3>
        <h3>diferente del</h3>
        <h3>horario</h3>
      </div>
      {/* Los siguientes div corresponden a las horas, seran tienen un className de la siguiente manera
      hora1, hora2 etc */}
      <div className="hora1" id="hora1">
        <h3>09:30</h3>
      </div>
      <div className="hora2">
        <h3>10:30</h3>
      </div>
      <div className="hora3">
        <h3>18:00</h3>
      </div>
      <div className="hora4">
        <h3>19:00</h3>
      </div>
      <div className="hora5">
        <h3>20:00</h3>
      </div>
      {/* Los siguientes div corresponden a las horas, seran tienen un className de la siguiente manera
      hl1 que significa hora del lunes 1, hl2 hora del lunes 2 etc */}
    </div>
  );
};

export default Actividades;
