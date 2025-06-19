import './GeneratedRentLease.css';

export default function GeneratedRentLease({ rentleaseText }) {
  return (
    <div className="lease-container">
      <h2 className="lease-title">Generated Rental Agreement</h2>
      <pre className="lease-content">{rentleaseText}</pre>
    </div>
  );
}
