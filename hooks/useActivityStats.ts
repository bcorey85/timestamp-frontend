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
		averageNoteLength: null
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

			setYearsArray(yearsArray);
			setYearTotals(yearTotals);
			setMonthlyCreatedTotals(monthlyCreatedTotals);
			setLongestStreak(longestStreak);
		},
		[ items, selectedYear ]
	);

	return {
		yearsArray,
		selectedYear,
		setSelectedYear,
		yearTotals,
		monthlyCreatedTotals,
		longestStreak
	};
};

export { useActivityStats };
