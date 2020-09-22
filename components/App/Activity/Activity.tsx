import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';

import { selectUser } from '../../../redux/user';
import { ListSection } from '../shared/ListSection/ListSection';
import { selectAppData } from '../../../redux/appData';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { useActivityStats } from '../../../hooks/useActivityStats';

const Activity = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const itemsRef = useRef([
		...appData.projects,
		...appData.tasks,
		...appData.notes
	]);

	const {
		yearsArray,
		setSelectedYear,
		yearTotals,
		monthlyCreatedTotals
	} = useActivityStats(itemsRef.current);

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='User Stats'
					subheading='Activity'
					subheadingType={IconType.time}
				/>
			</AppPageHeader>
			<AppPageSection>Not yet fully implemented...</AppPageSection>
			<AppPageSection>
				Years:
				{yearsArray.map(year => {
					return (
						<div key={year}>
							<Button
								btnStyle='link_primary'
								onClick={() => setSelectedYear(year)}>
								{year}
							</Button>
						</div>
					);
				})}
			</AppPageSection>
			<AppPageSection>Total hours: {yearTotals.hours}</AppPageSection>
			<AppPageSection>
				Total projects: {yearTotals.projects}
			</AppPageSection>
			<AppPageSection>Total tasks: {yearTotals.tasks}</AppPageSection>
			<AppPageSection>Total notes: {yearTotals.notes}</AppPageSection>

			<AppPageSection>
				By Month Totals:
				<div>Jan: {monthlyCreatedTotals[0]}</div>
				<div>Feb: {monthlyCreatedTotals[1]}</div>
				<div>Mar: {monthlyCreatedTotals[2]}</div>
				<div>Apr: {monthlyCreatedTotals[3]}</div>
				<div>May: {monthlyCreatedTotals[4]}</div>
				<div>Jun: {monthlyCreatedTotals[5]}</div>
				<div>Jul: {monthlyCreatedTotals[6]}</div>
				<div>Aug: {monthlyCreatedTotals[7]}</div>
				<div>Sep: {monthlyCreatedTotals[8]}</div>
				<div>Oct: {monthlyCreatedTotals[9]}</div>
				<div>Nov: {monthlyCreatedTotals[10]}</div>
				<div>Dec: {monthlyCreatedTotals[11]}</div>
			</AppPageSection>
		</React.Fragment>
	);
};

export { Activity };
