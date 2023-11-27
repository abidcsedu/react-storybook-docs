import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";

import { Provider } from "react-redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// A super-simple mock of the state of the store
export const MockedState = {
	tasks: [
		{ ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
		{ ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
		{ ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
		{ ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
		{ ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
		{ ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
	],
	status: "idle",
	error: null,
};

// A super-simple mock of a redux store

export const WithPinnedTask = {
	args: {
		tasks: [
			...Default.args.tasks.slice(0, 5),
			{ id: 6, title: "Task 6 (pinned)", state: "TASK_PINNED" },
		],
	},
};

export const Loading = {
	args: {
		tasks: [],
		loading: true,
	},
};

export const Empty = {
	args: {
		// Shaping the stories through args composition.
		// Inherited data coming from the Loading story.
		...Loading.args,
		loading: false,
	},
};
