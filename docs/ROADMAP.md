Roadmap
=======

- Replace ES7 generators with appropriate polyfil (for now)
- Remove unneeded Babel plugins
- Add README and other documentation


Vision
======

- A testing utility for fault tolerance and exploritory test suites
- Take in JSON, classes, JWT, streams, any common data formats
- apply 'corruptor' middleware which changes the source object and returns a copy
- specify a corruption level, 0 means no corruption and 100 changes beyond recognition


Uses
====

- Generate lots of similar test data
- Find limits of when an API will work or break, by ramping up the corruption level
- Find which inputs are acceptable vs not acceptable. For example, you can create a corruptor which replaces 'normal' characters with special or foreign characters. 






