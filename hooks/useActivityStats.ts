import { format } from 'path';
import React, { useRef, useState, useEffect } from 'react';
import { ItemService } from '../utils/ItemService';

const useActivityStats = (items: any[] = []) => {
	const [ formattedItems, setFormattedItems ] = useState({});
	const [ yearsArray, setYearsArray ] = useState([]);
	const [ selectedYear, setSelectedYear ] = useState(
		new Date(Date.now()).getFullYear()
	);
	const [ yearTotals, setYearTotals ] = useState({
		hours: null,
		projects: null,
		tasks: null,
		notes: null
	});
	const [ monthlyCreatedTotals, setMonthlyCreatedTotals ] = useState(
		new Array(12).fill(0)
	);

	useEffect(
		() => {
			const formattedItems = formatItems(items);
			const yearsArray = createYearsArray(formattedItems);
			const sortedByDate = sortByDate(formattedItems);
			const currentData = sortedByDate[selectedYear];

			const yearTotals = calcYearTotals(currentData);
			const monthlyCreatedTotals = calcTotalCreatedByMonth(currentData);

			setFormattedItems(sortedByDate);
			setYearsArray(yearsArray);
			setYearTotals(yearTotals);
			setMonthlyCreatedTotals(monthlyCreatedTotals);
		},
		[ items, selectedYear ]
	);

	const formatItems = (items: any[] = []): any[] => {
		return items.map(item => new ItemService(item).getItem());
	};

	const createYearsArray = (items: any[] = []): any[] => {
		const yearsArray: any[] = [];

		items.map(item => {
			const year = new Date(Date.parse(item.date)).getFullYear();
			const alreadyParsed = yearsArray.includes(year);

			if (!alreadyParsed) {
				yearsArray.push(year);
			}
		});

		return yearsArray;
	};

	const sortByDate = (items: any[] = []): { [key: string]: any[] } => {
		const sorted = items.sort((a, b) => {
			return a.date.localeCompare(b.date);
		});

		const sortedByYear: { [key: string]: any[] } = {};

		sorted.map(item => {
			const year = new Date(Date.parse(item.date)).getFullYear();
			const propExists = sortedByYear.hasOwnProperty(year);

			if (!propExists) {
				sortedByYear[year] = [];
			}

			sortedByYear[year].push(item);
		});

		return sortedByYear;
	};

	const calcTotalCreatedByMonth = (items: any[] = []): any[] => {
		const monthArr = new Array(12).fill(0);

		const totals = monthArr.map((monthTotal, i) => {
			const totalCreatedInMonth = items.reduce((acc, cur) => {
				const month = new Date(Date.parse(cur.date)).getMonth();
				if (month !== i) {
					return acc + 0;
				}

				return acc + 1;
			}, 0);
			return totalCreatedInMonth;
		});

		return totals;
	};

	const calcYearTotals = (items: any[] = []) => {
		const hours = items.reduce((acc, cur) => {
			if (cur.type !== 'project') {
				return acc + 0;
			}

			const hours = parseFloat(cur.hours);

			return hours + acc;
		}, 0);

		const projects = items.filter(item => item.type === 'project').length;
		const tasks = items.filter(item => item.type === 'task').length;
		const notes = items.filter(item => item.type === 'note').length;

		return {
			hours,
			projects,
			tasks,
			notes
		};
	};

	return {
		yearsArray,
		selectedYear,
		setSelectedYear,
		yearTotals,
		monthlyCreatedTotals
	};
};

export { useActivityStats };
