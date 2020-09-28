import { format } from 'path';
import React, { useRef, useState, useEffect } from 'react';
import { ItemService } from '../utils/ItemService';
import { ActivityStatsService } from '../utils/ActivityStatsService';

const useActivityStats = (items: any[] = []) => {
	const [ yearsArray, setYearsArray ] = useState([]);
	const [ selectedYear, setSelectedYear ] = useState(
		new Date(Date.now()).getFullYear()
	);
	const [ yearTotals, setYearTotals ] = useState({
		hours: null,
		projects: null,
		tasks: null,
		notes: null,
		averageNoteMinutes: null
	});
	const [ monthlyCreatedTotals, setMonthlyCreatedTotals ] = useState(
		new Array(12).fill(0)
	);
	const [ longestStreak, setLongestStreak ] = useState({
		startDate: null,
		endDate: null,
		span: null,
		amountOfItems: null
	});
	const [ dailyCounts, setDailyCounts ] = useState([]);

	useEffect(
		() => {
			const activityStatsService = new ActivityStatsService(
				items,
				selectedYear
			);

			const yearsArray = activityStatsService.yearsArray;
			const yearTotals = activityStatsService.yearTotals;
			const monthlyCreatedTotals = activityStatsService.monthTotals;
			const longestStreak = activityStatsService.longestStreak;
			const dailyCounts = activityStatsService.countsPerDay;

			setYearsArray(yearsArray);
			setYearTotals(yearTotals);
			setMonthlyCreatedTotals(monthlyCreatedTotals);
			setLongestStreak(longestStreak);
			setDailyCounts(dailyCounts);
		},
		[ items, selectedYear ]
	);

	return {
		yearsArray,
		selectedYear,
		setSelectedYear,
		yearTotals,
		monthlyCreatedTotals,
		longestStreak,
		dailyCounts
	};
};

export { useActivityStats };
