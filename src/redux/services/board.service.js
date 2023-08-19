import { apiService } from "../api";

export const boardService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    boardList: builder.query({
      query: () => ({
        url: `boards`,
        method: "GET",
      }),
    }),
    boardSingle: builder.query({
      query: (id) => ({
        url: `boards/${id}`,
        method: "GET",
      }),
    }),
    boardCreate: builder.mutation({
      query: (postBody) => ({
        url: `boards`,
        method: "POST",
        body: postBody,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiService.util.updateQueryData("boardList", undefined, (draft) => {
              draft.unshift(data);
              return draft;
            })
          );
        } catch (error) {}
      },
    }),
    boardSectionCreate: builder.mutation({
      query: (id) => ({
        url: `boards/${id}/sections`,
        method: "POST",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiService.util.updateQueryData("boardSingle", id, (draft) => {
              console.log(JSON.stringify(draft.sections));
              draft.sections.unshift(data);
              return draft;
            })
          );
        } catch (error) {}
      },
    }),

    boardSectionUpdate: builder.mutation({
      query: ({ boardId, sectionId, postBody }) => ({
        url: `boards/${boardId}/sections/${sectionId}`,
        method: "PUT",
        body: postBody,
      }),
      async onQueryStarted(
        { boardId, sectionId, postBody },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiService.util.updateQueryData("boardSingle", boardId, (draft) => {
            let findIndex = draft.sections.findIndex(
              (s) => s._id === sectionId
            );
            draft.sections[findIndex] = {
              ...draft.sections[findIndex],
              ...postBody,
            };
            return draft;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    boardSectionDelete: builder.mutation({
      query: ({ id, sectionId }) => ({
        url: `boards/${id}/sections/${sectionId}`,
        method: "DELETE",
      }),
      async onQueryStarted({ id, sectionId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiService.util.updateQueryData("boardSingle", id, (draft) => {
            draft.sections = draft.sections.filter(
              (item) => item._id !== sectionId
            );
            return draft;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    boardSectionTaskDelete: builder.mutation({
      query: ({ id, sectionId, taskId }) => ({
        url: `boards/${id}/tasks/${taskId}`,
        method: "DELETE",
      }),
      async onQueryStarted(
        { id, sectionId, taskId },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiService.util.updateQueryData("boardSingle", id, (draft) => {
            let findSectionIndex = draft.sections.findIndex(
              (s) => s._id === sectionId
            );

            draft.sections[findSectionIndex].tasks = draft.sections[
              findSectionIndex
            ].tasks.filter((item) => item._id !== taskId);

            return draft;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    boardTaskUpdate: builder.mutation({
      query: ({ boardId, sectionId, taskId, postBody }) => ({
        url: `boards/${boardId}/tasks/${taskId}`,
        method: "PUT",
        body: postBody,
      }),
      async onQueryStarted(
        { boardId, sectionId, taskId, postBody },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiService.util.updateQueryData("boardSingle", boardId, (draft) => {
            let findSectionIndex = draft.sections.findIndex(
              (s) => s._id === sectionId
            );

            let findTaskIndex = draft.sections[
              findSectionIndex
            ].tasks.findIndex((t) => t._id === taskId);

            draft.sections[findSectionIndex].tasks[findTaskIndex] = {
              ...draft.sections[findSectionIndex].tasks[findTaskIndex],
              ...postBody,
            };

            return draft;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    boardSectionCreateTodo: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `boards/${id}/tasks`,
        method: "POST",
        body: postBody,
      }),
      async onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiService.util.updateQueryData("boardSingle", id, (draft) => {
              const findSection = draft.sections.findIndex(
                (s) => s._id === postBody.sectionId
              );
              console.log(JSON.stringify(draft.sections[findSection].tasks));

              draft.sections[findSection].tasks.unshift(data);

              console.log(JSON.stringify(draft.sections[findSection].tasks));
              // draft.sections.unshift(data);
              return draft;
            })
          );
        } catch (error) {}
      },
    }),

    boardUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `boards/${id}`,
        method: "PUT",
        body: postBody,
      }),

      async onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        const patchResultSingle = dispatch(
          apiService.util.updateQueryData("boardSingle", id, (draft) => {
            return Object.assign(draft, postBody);
          })
        );
        const patchResultList = dispatch(
          apiService.util.updateQueryData("boardList", undefined, (draft) => {
            let findIndex = draft.findIndex((board) => board._id === id);
            draft[findIndex] = { ...draft[findIndex], ...postBody };
            return draft;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResultSingle.undo();
          patchResultList.undo();
        }
      },
    }),
    boardDelete: builder.mutation({
      query: (id) => ({
        url: `boards/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        const response = dispatch(
          apiService.util.updateQueryData("boardList", undefined, (draft) => {
            return (draft = draft.filter((item) => item._id !== id));
          })
        );
        try {
          await queryFulfilled;
        } catch {
          response.undo();
        }
      },
    }),
  }),
});
export const {
  useBoardListQuery,
  useBoardSingleQuery,
  useBoardDeleteMutation,
  useBoardCreateMutation,
  useBoardSectionCreateMutation,
  useBoardUpdateMutation,
  useBoardSectionCreateTodoMutation,
  useBoardSectionUpdateMutation,
  useBoardTaskUpdateMutation,
  useBoardSectionDeleteMutation,
  useBoardSectionTaskDeleteMutation,
} = boardService;
