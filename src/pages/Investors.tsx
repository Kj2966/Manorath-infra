import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, BarChart3, PieChart, Download } from 'lucide-react';

const Investors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const financialReports = [
    { year: '2023', quarter: 'Q4', type: 'Annual Report' },
    { year: '2023', quarter: 'Q3', type: 'Quarterly Report' },
    { year: '2023', quarter: 'Q2', type: 'Quarterly Report' },
    { year: '2023', quarter: 'Q1', type: 'Quarterly Report' },
  ];

  const shareholdingPattern = [
    { category: 'Promoters', percentage: 45 },
    { category: 'Foreign Institutional Investors', percentage: 25 },
    { category: 'Domestic Institutional Investors', percentage: 15 },
    { category: 'Public', percentage: 15 },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-construction-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold font-heading mb-6">Investor Relations</h1>
            <p className="text-xl text-gray-300">
              Access financial information, reports, and corporate governance details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: TrendingUp, label: 'Revenue Growth', value: '+25%' },
              { icon: BarChart3, label: 'Market Cap', value: '$2.5B' },
              { icon: PieChart, label: 'EBITDA Margin', value: '18.5%' },
              { icon: Download, label: 'Debt/Equity', value: '0.8x' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-construction-blue mb-4" />
                <div className="text-4xl font-bold text-construction-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Financial Reports */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Financial Reports</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Year</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Period</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Type</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {financialReports.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-600">{report.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.quarter}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.type}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-construction-blue hover:text-blue-700">
                          Download PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Shareholding Pattern */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Shareholding Pattern</h2>
            <div className="space-y-4">
              {shareholdingPattern.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{item.category}</span>
                    <span className="text-sm font-medium text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-construction-blue h-2.5 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;