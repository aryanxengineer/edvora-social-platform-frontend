"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

function parseCommaSeparated(value: string) {
  return value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

export default function CreatePostPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("caption", data.caption || "");
      formData.append("title", data.title || "");
      formData.append("location", data.location || "");
      formData.append("visibility", data.visibility);
      formData.append("tags", JSON.stringify(data.tags || []));
      formData.append("mentions", JSON.stringify(data.mentions || []));

      await new Promise((res) => setTimeout(res, 1500));

      console.log("Submitted:", data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* 🔹 Sticky Header (like Instagram) */}
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex justify-between items-center">
        <span className="font-semibold text-lg">Create Post</span>
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          className="text-blue-600 font-medium disabled:opacity-50"
        >
          {isLoading ? "Posting..." : "Share"}
        </button>
      </div>

      {/* 🔹 Main Scrollable Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* Image Upload */}
        <div className="space-y-3">
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required: true,
              onChange: (e) =>
                handleImageChange(e.target.files[0]),
            })}
          />

          {errors.image && (
            <p className="text-red-500 text-sm">
              Image is required
            </p>
          )}
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="w-full aspect-square bg-black overflow-hidden rounded-md">
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          className="w-full border rounded-md p-3 resize-none"
          rows={4}
          {...register("caption")}
        />

        {/* Title */}
        <input
          placeholder="Title"
          className="w-full border rounded-md p-2"
          {...register("title")}
        />

        {/* Location */}
        <input
          placeholder="Add location"
          className="w-full border rounded-md p-2"
          {...register("location")}
        />

        {/* Tags */}
        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <input
              placeholder="Tags (comma separated)"
              className="w-full border rounded-md p-2"
              onChange={(e) =>
                field.onChange(
                  parseCommaSeparated(e.target.value)
                )
              }
            />
          )}
        />

        {/* Mentions */}
        <Controller
          control={control}
          name="mentions"
          render={({ field }) => (
            <input
              placeholder="Mentions (comma separated)"
              className="w-full border rounded-md p-2"
              onChange={(e) =>
                field.onChange(
                  parseCommaSeparated(e.target.value)
                )
              }
            />
          )}
        />

        {/* Visibility */}
        <select
          className="w-full border rounded-md p-2"
          {...register("visibility")}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="followers">Followers</option>
        </select>

      </div>
    </div>
  );
}