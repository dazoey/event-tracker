import { supabase } from "../services/supabaseClient.js";

// GET ALL EVENTS
export const getEvents = async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");

  if (error) return res.status(400).json({ error });

  res.json(data);
};

// CREATE
export const createEvent = async (req, res) => {
  const event = req.body;

  const { data, error } = await supabase.from("events").insert(event);

  if (error) return res.status(400).json({ error });

  res.json(data);
};

// UPDATE
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  const { data, error } = await supabase
    .from("events")
    .update(update)
    .eq("id", id);

  if (error) return res.status(400).json({ error });

  res.json(data);
};

// DELETE
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json({ error });

  res.json(data);
};
