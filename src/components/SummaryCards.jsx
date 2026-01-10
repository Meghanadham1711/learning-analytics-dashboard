export default function SummaryCards({ summary }) {
  const items = [
    { label: "Total Learners enrolled", value: summary.totalLearners },
    { label: "Male", value: summary.male },
    { label: "Female", value: summary.female,icon: "fa-male" },
    { label: "Others", value: summary.others , icon: "fa-user" },
    { label: "Active Learners", value: summary.activeLearners },
    { label: "Engaged Learners", value: summary.engagedLearners },
  ];

  return (
    <div className="cards">
      {items.map(i => (
        <div className="card" key={i.label}>
          <h4>{i.label}</h4>
          <h2>{i.value}</h2>
        </div>
      ))}
    </div>
  );
}
