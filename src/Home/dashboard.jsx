import { makeStyles, Text, Title2 } from '@fluentui/react-components';

const salesTrend = [
  { day: 'Mon', value: 62 },
  { day: 'Tue', value: 74 },
  { day: 'Wed', value: 58 },
  { day: 'Thu', value: 81 },
  { day: 'Fri', value: 96 },
  { day: 'Sat', value: 88 },
  { day: 'Sun', value: 72 }
];

const salesMix = [
  { label: 'In-store', value: 48, color: '#2563eb' },
  { label: 'Online', value: 32, color: '#10b981' },
  { label: 'Mobile', value: 20, color: '#f59e0b' }
];

const transactions = [
  { id: '#1024', customer: 'Alicia Johnson', amount: '$248.50', time: '09:42 AM', status: 'Paid' },
  { id: '#1025', customer: 'Marcus Lee', amount: '$96.00', time: '10:15 AM', status: 'Paid' },
  { id: '#1026', customer: 'David Chen', amount: '$184.75', time: '11:28 AM', status: 'Pending' },
  { id: '#1027', customer: 'Olivia Smith', amount: '$325.20', time: '12:06 PM', status: 'Paid' },
  { id: '#1028', customer: 'Noah Brown', amount: '$72.40', time: '01:12 PM', status: 'Refund' }
];

const metrics = [
  { label: 'Gross Sales', value: '$24,680', change: '+12.4%', tone: 'positive' },
  { label: 'Transactions', value: '1,284', change: '+8.2%', tone: 'positive' },
  { label: 'Avg. Basket', value: '$62.30', change: '-1.6%', tone: 'negative' },
  { label: 'Refunds', value: '$1,240', change: '+3.1%', tone: 'neutral' }
];

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    backgroundImage: "linear-gradient(rgba(13, 22, 36, 0.72), rgba(13, 22, 36, 0.72)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '32px 24px',
    color: '#e5eefb'
  },
  shell: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gap: '22px'
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    background: 'rgba(15, 23, 42, 0.6)',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    borderRadius: '18px',
    padding: '20px 24px',
    backdropFilter: 'blur(8px)'
  },
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  },
  navLink: {
    border: '1px solid rgba(148, 163, 184, 0.35)',
    background: 'rgba(15, 23, 42, 0.6)',
    color: '#e2e8f0',
    borderRadius: '10px',
    padding: '10px 14px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navLinkActive: {
    background: 'rgba(37, 99, 235, 0.25)',
    borderColor: 'rgba(96, 165, 250, 0.9)',
    color: '#dbeafe'
  },
  titleWrap: {
    display: 'grid',
    gap: '6px'
  },
  eyebrow: {
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontSize: '12px',
    color: '#93c5fd'
  },
  actions: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  actionButton: {
    border: '1px solid rgba(148, 163, 184, 0.4)',
    background: 'rgba(15, 23, 42, 0.7)',
    color: '#f8fbff',
    borderRadius: '10px',
    padding: '10px 16px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  primaryButton: {
    border: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px 18px',
    fontWeight: 700,
    cursor: 'pointer'
  },
  dangerButton: {
    border: '1px solid rgba(248, 113, 113, 0.5)',
    background: 'rgba(127, 29, 29, 0.45)',
    color: '#fecaca',
    borderRadius: '10px',
    padding: '10px 16px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(170px, 1fr))',
    gap: '18px'
  },
  statCard: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '16px',
    padding: '18px 20px',
    display: 'grid',
    gap: '10px',
    boxShadow: '0 12px 24px rgba(15, 23, 42, 0.18)'
  },
  statLabel: {
    color: '#bfdbfe',
    fontSize: '13px'
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.2
  },
  statMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: 600
  },
  positive: {
    color: '#34d399'
  },
  negative: {
    color: '#fca5a5'
  },
  neutral: {
    color: '#cbd5e1'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1.7fr 0.9fr',
    gap: '22px'
  },
  card: {
    background: 'rgba(15, 23, 42, 0.72)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    borderRadius: '18px',
    padding: '22px',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.2)'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '18px'
  },
  chart: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '12px',
    height: '200px',
    paddingTop: '8px'
  },
  barGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '12px',
    height: '100%'
  },
  bar: {
    width: '100%',
    maxWidth: '44px',
    background: 'linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)',
    borderRadius: '12px 12px 0 0',
    minHeight: '18px'
  },
  barLabel: {
    fontSize: '12px',
    color: '#cbd5e1'
  },
  mixList: {
    display: 'grid',
    gap: '16px'
  },
  mixItem: {
    display: 'grid',
    gap: '6px'
  },
  progressTrack: {
    width: '100%',
    height: '10px',
    borderRadius: '999px',
    background: 'rgba(148, 163, 184, 0.18)',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '999px'
  },
  mixHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#e2e8f0',
    fontSize: '14px'
  },
  tableWrap: {
    overflow: 'hidden',
    borderRadius: '14px',
    border: '1px solid rgba(148, 163, 184, 0.2)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    background: 'rgba(15, 23, 42, 0.45)'
  },
  th: {
    textAlign: 'left',
    padding: '14px 18px',
    color: '#cbd5e1',
    fontSize: '12px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
  },
  td: {
    padding: '14px 18px',
    color: '#e2e8f0',
    borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
    fontSize: '14px'
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 8px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: 700
  },
  paid: {
    background: 'rgba(16, 185, 129, 0.16)',
    color: '#6ee7b7'
  },
  pending: {
    background: 'rgba(245, 158, 11, 0.14)',
    color: '#fbbf24'
  },
  refund: {
    background: 'rgba(239, 68, 68, 0.14)',
    color: '#fca5a5'
  },
  badge: {
    background: 'rgba(59, 130, 246, 0.16)',
    color: '#bfdbfe',
    borderRadius: '999px',
    padding: '6px 10px',
    fontSize: '12px',
    fontWeight: 700
  }
});

function Dashboard({ onLogout, onNavigate }) {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <div className={styles.titleWrap}>
            <Text className={styles.eyebrow}>Operations</Text>
            <Title2 as="h1">POS Sales Report</Title2>
          </div>

          <div className={styles.actions}>
            <div className={styles.navGroup}>
              <button type="button" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={() => onNavigate('/home')}>Home</button>
              <button type="button" className={styles.navLink} onClick={() => onNavigate('/register')}>Register</button>
              <button type="button" className={styles.navLink} onClick={() => onNavigate('/contact')}>Contact</button>
            </div>
            <button className={styles.actionButton} type="button">This Week</button>
            <button className={styles.actionButton} type="button">Export</button>
            <button className={styles.primaryButton} type="button">New Order</button>
            <button className={styles.dangerButton} type="button" onClick={onLogout}>Logout</button>
          </div>
        </header>

        <section className={styles.cards}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.statCard}>
              <Text className={styles.statLabel}>{metric.label}</Text>
              <div className={styles.statValue}>{metric.value}</div>
              <div className={styles.statMeta}>
                <span className={metric.tone === 'positive' ? styles.positive : metric.tone === 'negative' ? styles.negative : styles.neutral}>
                  {metric.change}
                </span>
                <span className={styles.neutral}>vs last period</span>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.mainGrid}>
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <Title2 as="h2">Sales Trend</Title2>
              <span className={styles.badge}>+12.4% growth</span>
            </div>

            <div className={styles.chart}>
              {salesTrend.map((item) => (
                <div key={item.day} className={styles.barGroup}>
                  <div className={styles.bar} style={{ height: `${item.value}%` }} />
                  <span className={styles.barLabel}>{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <Title2 as="h2">Sales Mix</Title2>
            </div>

            <div className={styles.mixList}>
              {salesMix.map((item) => (
                <div key={item.label} className={styles.mixItem}>
                  <div className={styles.mixHeader}>
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${item.value}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.sectionHeader}>
            <Title2 as="h2">Recent Transactions</Title2>
            <span className={styles.badge}>Updated 5 min ago</span>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Order</th>
                  <th className={styles.th}>Customer</th>
                  <th className={styles.th}>Amount</th>
                  <th className={styles.th}>Time</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((row) => (
                  <tr key={row.id}>
                    <td className={styles.td}>{row.id}</td>
                    <td className={styles.td}>{row.customer}</td>
                    <td className={styles.td}>{row.amount}</td>
                    <td className={styles.td}>{row.time}</td>
                    <td className={styles.td}>
                      <span
                        className={`${styles.statusBadge} ${
                          row.status === 'Paid'
                            ? styles.paid
                            : row.status === 'Pending'
                              ? styles.pending
                              : styles.refund
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
