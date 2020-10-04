import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { Calendar } from './Calendar/Calendar';

import { selectAppData } from '../../../redux/appData';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { useActivityStats } from '../../../hooks/useActivityStats';
import { StringService } from '../../../utils/StringService';
import { MathService } from '../../../utils/MathService';
import { DateTimeService } from '../../../utils/DateTimeService';
import { YearToggle } from './YearToggle';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { DailyItemCount } from './DailyItemCount/DailyItemCount';

const Activity = (): JSX.Element => {
	const appData = useSelector(selectAppData);
	const itemsRef = useRef([
		...appData.projects,
		...appData.tasks,
		...appData.notes
	]);

	const {
		yearsArray,
		selectedYear,
		setSelectedYear,
		yearTotals,
		monthlyCreatedTotals,
		longestStreak,
		dailyCounts
	} = useActivityStats(itemsRef.current);

	const handleYearChange = (year: number | string) => {
		setSelectedYear(year as number);
	};

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='User Stats'
					subheading='Activity'
					subheadingType='time'
				/>
				<AppPageHeaderControls>
					<YearToggle
						years={yearsArray}
						toggleYear={handleYearChange}
						selectedYear={selectedYear}
					/>
				</AppPageHeaderControls>
			</AppPageHeader>

			<h2>{selectedYear} Totals</h2>
			<AppPageSection>
				<StatsBar>
					<StatCard
						type='time'
						title='Hours'
						stat={MathService.round(yearTotals.hours, 1)}
					/>
					<StatCard
						type='project'
						title='Projects'
						stat={MathService.round(yearTotals.projects, 1)}
					/>
					<StatCard
						type='task'
						title='Tasks'
						stat={MathService.round(yearTotals.tasks, 1)}
					/>
					<StatCard
						type='note'
						title='Notes'
						stat={MathService.round(yearTotals.notes, 1)}
					/>
					<StatCard
						type='time'
						title='Min / Note'
						stat={MathService.round(
							yearTotals.averageNoteMinutes,
							1
						)}
					/>
				</StatsBar>
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Daily Activity' />
				<DailyItemCount dailyItemCounts={dailyCounts} />
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Monthly Activity' />
				<Calendar monthlyCreatedTotals={monthlyCreatedTotals} />
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Longest Activity Streak' />

				<div>
					{longestStreak.startDate && longestStreak.endDate ? (
						`${DateTimeService.formatDate(
							longestStreak.startDate
						)} - ${DateTimeService.formatDate(
							longestStreak.endDate
						)}`
					) : null}
				</div>
				<div>
					{StringService.pluralize(longestStreak.span, {
						singular: 'day',
						plural: 'days'
					})}
				</div>
				<div>
					{StringService.pluralize(longestStreak.amountOfItems, {
						singular: 'item created',
						plural: 'items created'
					})}
				</div>
			</AppPageSection>
		</React.Fragment>
	);
};

export { Activity };
