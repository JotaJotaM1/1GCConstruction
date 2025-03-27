import '../styles/components/Quoter.css';
import { useState } from 'react';

export default function Cotizador() {
    const [servicio, setServicio] = useState('');
    const [area, setArea] = useState('');
    const [material, setMaterial] = useState('');
    const [precio, setPrecio] = useState(null);
    const [desglose, setDesglose] = useState(null);

    const calcularPrecio = () => {
        const areaNum = parseFloat(area);
        if (isNaN(areaNum) || areaNum <= 0) return;

        let base = 0;
        if (servicio === 'construccion') base = 500;
        if (servicio === 'remodelacion') base = 300;
        if (servicio === 'pintura') base = 100;

        let factorMaterial = 1;
        if (material === 'economico') factorMaterial = 1;
        if (material === 'estandar') factorMaterial = 1.2;
        if (material === 'premium') factorMaterial = 1.5;

        const total = areaNum * base * factorMaterial;
        setPrecio(total);

        setDesglose({
            area: areaNum,
            base,
            factorMaterial,
            subtotal: areaNum * base,
            total
        });
    };

    const reiniciar = () => {
        setServicio('');
        setArea('');
        setMaterial('');
        setPrecio(null);
        setDesglose(null);
    };

    const esFormularioValido = servicio && parseFloat(area) > 0 && material;

    return (
        <div className="cotizador-container">

            <h2>🛠️ Quoter</h2>

            <div className="form-group">
                <label htmlFor="servicio">Service type</label>
                <select
                    id="servicio"
                    value={servicio}
                    onChange={e => setServicio(e.target.value)}
                >
                    <option value="">Select a service</option>
                    <option value="construccion">Construction</option>
                    <option value="remodelacion">Remodeling</option>
                    <option value="pintura">Painting</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="area">Area (m²)</label>
                <input
                    id="area"
                    className="inputNumber"
                    type="number"
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    min="1"
                    step="any"
                    placeholder="e.g., 50"
                />
            </div>

            <div className="form-group">
                <label htmlFor="material">Material quality</label>
                <select
                    id="material"
                    value={material}
                    onChange={e => setMaterial(e.target.value)}
                >
                    <option value="">Select the quality</option>
                    <option value="economico">Economic</option>
                    <option value="estandar">Standard</option>
                    <option value="premium">Premium</option>
                </select>
            </div>

            <button
                type="button"
                onClick={calcularPrecio}
                disabled={!esFormularioValido}
                className={`calcular ${esFormularioValido ? 'activo' : ''}`}
            >
                Calculate estimate
            </button>

            <button type="button" className="reiniciar" onClick={reiniciar}>Reset</button>

            {precio !== null && desglose && (
                <div className="resultado animada">
                    <h3 className='desgloseBreakdown'>💡 Breakdown</h3>
                    <p className='desgloseBreakdown'>Area: <strong>{desglose.area} m²</strong></p>
                    <p className='desgloseBreakdown'>Base price per m²: <strong>${desglose.base}</strong></p>
                    <p className='desgloseBreakdown'>Subtotal (Area x Base price): <strong>${desglose.subtotal.toLocaleString()}</strong></p>
                    <p className='desgloseBreakdown'>Material factor: <strong>{desglose.factorMaterial}</strong></p>
                    <p className='desgloseBreakdown'><strong>Estimated final price: ${desglose.total.toLocaleString()}</strong></p>
                </div>
            )}
        </div>
    );
}
